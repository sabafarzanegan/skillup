"use client";
import { Button } from "@/components/ui/Button/Button";
import "./page.module.css";

import { Input } from "@/components/ui/Input/Input";
import { useTheme } from "@/provider/theme-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card/Card";

export default function Home() {
  const { toggleTheme } = useTheme();
  return (
    <div>
      <Button variant="default" onClick={toggleTheme}>
        روشن
      </Button>

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
