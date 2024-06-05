import { connect } from "@/dbconfig/dbConfig";
import Topic from "@/models/topicmodels";
import { NextResponse } from "next/server";

connect()

export async function POST(request) {
    const {title , description } = await request.json();
    await Topic.create({ title, description });
    return NextResponse.json({message: "Topic Created"}, { status: 201});
}

export async function GET() {
    const topics = Topic.find();
    return NextResponse.json({ topics })
}

