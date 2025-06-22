import printer from 'printer';

export async function GET() {
  
  const data = await printer.json()
 
  return Response.json({ data })
}