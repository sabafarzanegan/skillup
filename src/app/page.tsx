import "./page.module.css";

import { Input } from "@/components/ui/Input/Input";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card/Card";

export default async function Home() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>hello</CardTitle>
        </CardHeader>
        <CardContent>
          <Input />
        </CardContent>
      </Card>
    </div>
  );
}
