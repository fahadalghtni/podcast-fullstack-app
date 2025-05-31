import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Track } from './track.entity';

interface ItunesApiResult {
  trackName: string;
  artistName: string;
  collectionName: string;
  previewUrl: string;
  artworkUrl100: string;
}

@Injectable()
export class ItunesService {
  constructor(
    @InjectRepository(Track)
    private readonly trackRepository: Repository<Track>,
  ) {}

  async search(term: string): Promise<Track[]> {
    const response = await axios.get('https://itunes.apple.com/search', {
      params: {
        term,
        media: 'music',
        limit: 10,
      },
    });

    const results: ItunesApiResult[] = response.data.results;

    const tracks: Track[] = results.map((item) => {
      const track = new Track();
      track.trackName = item.trackName;
      track.artistName = item.artistName;
      track.collectionName = item.collectionName;
      track.previewUrl = item.previewUrl;
      track.artworkUrl100 = item.artworkUrl100;
      return track;
    });

    await this.trackRepository.save(tracks);

    return tracks;
  }
  async findAll(): Promise<Track[]> {
    return this.trackRepository.find({
      order: { id: 'DESC' },
      take: 18,
    });
  }
}
