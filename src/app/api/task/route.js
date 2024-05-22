import dbConnect from '@/lib/mongodb';
import Task from '@/models/Task';

export async function GET(req) {
  await dbConnect();
  const tasks = await Task.find({});
  return new Response(JSON.stringify({ success: true, data: tasks }), {
    status: 200,
  });
}

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  const task = await Task.create(body);
  return new Response(JSON.stringify({ success: true, data: task }), {
    status: 201,
  });
}

export async function DELETE(req) {
    await dbConnect();
    const { id } = await req.json();
    await Task.findByIdAndDelete(id);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  }