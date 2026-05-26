import { Card, CardContent } from "@/components/ui/card";
import { listarClientes } from "@/services/Clientes";
import type { Cliente } from "@/types/entidades";
import { useEffect, useState } from "react";

function Home() {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  async function carregarClientes() {
    setClientes(await listarClientes());
  }

  useEffect(() => {
    carregarClientes();
  }, []);

  return (
    <>
      {/* page */}
      <div>
        {/* coisinhas */}
        <div>
          <Card className="min-w-fit max-w-[min(50%,200px)] w-full">
            <CardContent className="text-lg flex flex-col gap-4 text-center">
              <h2>Clientes</h2>
              <p className="bg-accent rounded py-1 text-muted-foreground">
                {clientes.length}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Home;
