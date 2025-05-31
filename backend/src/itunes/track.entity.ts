import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Track {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  trackName: string;

  @Column()
  artistName: string;

  @Column()
  collectionName: string;

  @Column()
  previewUrl: string;

  @Column()
  artworkUrl100: string;
}
