import { useQuery } from "@tanstack/react-query";
import { CircleUser } from "lucide-react";
import { IClient } from "../../types/client";

export default function ClientsList() {
  const { data } = useQuery({
    queryKey: ["clients"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5160");
      const data: IClient[] = await response.json();
      return data;
    },
    staleTime: 1000 * 60,
  });
  return (
    <div>
      {/* <div className='grid place-items-center h-screen '>
                <div className='space-y-3.5'>
                    <div className='rounded px-4 h-12 bg-neutral-50 shadow-shape flex items-center justify gap-5'>
                        <CircleUser/>
                        <span className='font-semibold'>Álvaro</span>
                    </div>
                    <div className='rounded px-4 h-12 bg-neutral-50 shadow-shape flex items-center justify gap-5'>
                        <CircleUser/>
                        <span className='font-semibold'>fabricio</span>
                    </div>
                    <div className='rounded px-4 h-12 bg-neutral-50 shadow-shape flex items-center justify-center gap-5'>
                        <UserPlus2 className='hover:text-emerald-400'/>
                    </div>
                </div>
            </div> */}
      <div className="grid place-items-center h-screen">
        <div className="space-y-3.5">
          <ul>
            {data ? 
                data.map((i) => {
              return (
                <li>
                  <div className="rounded px-4 h-12 bg-neutral-50 shadow-shape flex items-center justify gap-5">
                    <CircleUser />
                    <span className="font-semibold">{i.name}</span>
                  </div>
                </li>
              );
            }): <></>}
          </ul>
        </div>
      </div>

      <div></div>
    </div>
  );
}
