import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("typeEntry")
export class TypeEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;
}
