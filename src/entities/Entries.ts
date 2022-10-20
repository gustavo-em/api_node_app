import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("entries")
export class Entrie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;
}
