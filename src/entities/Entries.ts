import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TypeEntry } from "./TypeEntry";

@Entity("entries")
export class Entrie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "int" })
  type_id: number;

  @Column({ type: "int" })
  user_id: number;
}
