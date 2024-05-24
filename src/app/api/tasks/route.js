import dbConnect from '@/lib/mongodb';
import Task from '@/models/Task';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';
export async function GET(req) {
  await dbConnect();

  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    const tasks = await Task.find({ userId: session.user.id });
    console.log(session.user.id)

    return new Response(JSON.stringify(tasks), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export async function POST(req) {
  await dbConnect();

  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    const { title, description, state, workspace, userId, tags, conflict, priority } = await req.json();
    console.log(title, description, state, workspace, userId, tags, conflict, priority)
    if (!title || !description || !state || !workspace) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const newTask = new Task({
      title,
      description,
      state,
      workspace,
      tags,
      conflict,
      priority,
      userId,
      date: new Date(),
    });

    await newTask.save();

    return new Response(JSON.stringify(newTask), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error creating task:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}