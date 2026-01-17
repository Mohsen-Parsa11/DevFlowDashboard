import { NextResponse } from "next/server";

export { auth as middleware } from "./auth";

export default function Proxy() {
  return NextResponse.next();
}
