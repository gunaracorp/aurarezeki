import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const LeadSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter").max(80),
  whatsapp: z
    .string()
    .min(8, "Nomor WhatsApp tidak valid")
    .max(20, "Nomor WhatsApp tidak valid")
    .regex(/^[0-9+\-\s]+$/, "Nomor WhatsApp hanya boleh angka"),
  paket: z.string().max(60).optional().nullable(),
  masalah: z.string().max(200).optional().nullable(),
  catatan: z.string().max(1000).optional().nullable(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { ok: false, error: "Data tidak valid" },
        { status: 400 },
      );
    }

    const parsed = LeadSchema.safeParse(body);
    if (!parsed.success) {
      const first = parsed.error.issues[0];
      return NextResponse.json(
        { ok: false, error: first?.message ?? "Data tidak valid" },
        { status: 400 },
      );
    }

    const data = parsed.data;
    const lead = await db.lead.create({
      data: {
        name: data.name.trim(),
        whatsapp: data.whatsapp.trim(),
        paket: data.paket?.trim() || null,
        masalah: data.masalah?.trim() || null,
        catatan: data.catatan?.trim() || null,
      },
    });

    return NextResponse.json({ ok: true, id: lead.id });
  } catch (err) {
    console.error("[api/leads] error:", err);
    return NextResponse.json(
      { ok: false, error: "Terjadi kesalahan, silakan coba lagi." },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const count = await db.lead.count();
    return NextResponse.json({ ok: true, count });
  } catch (err) {
    console.error("[api/leads] GET error:", err);
    return NextResponse.json({ ok: true, count: 0 });
  }
}
