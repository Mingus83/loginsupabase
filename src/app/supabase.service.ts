import { Injectable } from '@angular/core';
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  // User,
} from '@supabase/supabase-js';
import { environment } from './enviroment';

export interface Profile {
  id?: string;
  username: string;
  website: string;
  avatar_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient | undefined;
  _session: AuthSession | null = null;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  initialize() {}

  get session() {
    this.supabase?.auth.getSession().then(({ data }) => {
      this._session = data.session;
    });
    console.log(this._session);
    return this._session;
  }

  // profile(user: User) {
  //   return this.supabase
  //     .from('profiles')
  //     .select(`username, website, avatar_url`)
  //     .eq('id', user.id)
  //     .single();
  // }

  // authChanges(
  //   callback: (event: AuthChangeEvent, session: Session | null) => void
  // ) {
  //   return this.supabase?.auth.onAuthStateChange(callback);
  // }

  // signIn(email: string | null, password: string | null) {
  //   if (email === null || password === null) return;
  //   return this.supabase?.auth.signInWithPassword({ email, password });
  // }

  // signOut() {
  //   return this.supabase?.auth.signOut();
  // }

  // updateProfile(profile: Profile) {
  //   const update = {
  //     ...profile,
  //     updated_at: new Date(),
  //   };

  //   return this.supabase.from('profiles').upsert(update);
  // }

  // downLoadImage(path: string) {
  //   return this.supabase.storage.from('avatars').download(path);
  // }

  // uploadAvatar(filePath: string, file: File) {
  //   return this.supabase.storage.from('avatars').upload(filePath, file);
  // }
}
