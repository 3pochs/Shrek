export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admin_users: {
        Row: {
          created_at: string
          id: string
          password: string
          username: string
        }
        Insert: {
          created_at?: string
          id: string
          password: string
          username: string
        }
        Update: {
          created_at?: string
          id?: string
          password?: string
          username?: string
        }
        Relationships: []
      }
      change_of_heart_requests: {
        Row: {
          created_at: string
          evidence: string | null
          id: number
          reason: string
          status: string | null
          target_location: string | null
          target_name: string
        }
        Insert: {
          created_at?: string
          evidence?: string | null
          id?: never
          reason: string
          status?: string | null
          target_location?: string | null
          target_name: string
        }
        Update: {
          created_at?: string
          evidence?: string | null
          id?: never
          reason?: string
          status?: string | null
          target_location?: string | null
          target_name?: string
        }
        Relationships: []
      }
      comments: {
        Row: {
          content: string
          created_at: string
          id: number
          image_url: string | null
          thread_id: number | null
        }
        Insert: {
          content: string
          created_at?: string
          id?: number
          image_url?: string | null
          thread_id?: number | null
        }
        Update: {
          content?: string
          created_at?: string
          id?: number
          image_url?: string | null
          thread_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "threads"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_submissions: {
        Row: {
          budget_range: string
          business_type: string
          created_at: string
          email: string
          id: string
          message: string | null
          name: string
          status: string
        }
        Insert: {
          budget_range: string
          business_type: string
          created_at?: string
          email: string
          id?: string
          message?: string | null
          name: string
          status?: string
        }
        Update: {
          budget_range?: string
          business_type?: string
          created_at?: string
          email?: string
          id?: string
          message?: string | null
          name?: string
          status?: string
        }
        Relationships: []
      }
      decks: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          id: string
          is_public: boolean | null
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "decks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      friends: {
        Row: {
          created_at: string | null
          friend_id: string
          id: string
          status: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          friend_id: string
          id?: string
          status: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          friend_id?: string
          id?: string
          status?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "friends_friend_id_fkey"
            columns: ["friend_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "friends_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      likes: {
        Row: {
          created_at: string
          id: string
          thread_id: number | null
          user_fingerprint: string
        }
        Insert: {
          created_at?: string
          id?: string
          thread_id?: number | null
          user_fingerprint: string
        }
        Update: {
          created_at?: string
          id?: string
          thread_id?: number | null
          user_fingerprint?: string
        }
        Relationships: [
          {
            foreignKeyName: "likes_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "threads"
            referencedColumns: ["id"]
          },
        ]
      }
      poll_options: {
        Row: {
          created_at: string
          id: number
          option_text: string
          poll_id: number | null
          votes: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          option_text: string
          poll_id?: number | null
          votes?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          option_text?: string
          poll_id?: number | null
          votes?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "poll_options_poll_id_fkey"
            columns: ["poll_id"]
            isOneToOne: false
            referencedRelation: "polls"
            referencedColumns: ["id"]
          },
        ]
      }
      poll_votes: {
        Row: {
          created_at: string
          id: string
          option_id: number | null
          poll_id: number | null
          user_fingerprint: string
        }
        Insert: {
          created_at?: string
          id?: string
          option_id?: number | null
          poll_id?: number | null
          user_fingerprint: string
        }
        Update: {
          created_at?: string
          id?: string
          option_id?: number | null
          poll_id?: number | null
          user_fingerprint?: string
        }
        Relationships: [
          {
            foreignKeyName: "poll_votes_option_id_fkey"
            columns: ["option_id"]
            isOneToOne: false
            referencedRelation: "poll_options"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "poll_votes_poll_id_fkey"
            columns: ["poll_id"]
            isOneToOne: false
            referencedRelation: "polls"
            referencedColumns: ["id"]
          },
        ]
      }
      polls: {
        Row: {
          created_at: string
          id: number
          is_active: boolean | null
          question: string
        }
        Insert: {
          created_at?: string
          id?: number
          is_active?: boolean | null
          question: string
        }
        Update: {
          created_at?: string
          id?: number
          is_active?: boolean | null
          question?: string
        }
        Relationships: []
      }
      portfolio_data: {
        Row: {
          created_at: string | null
          data: Json
          id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          data: Json
          id?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          data?: Json
          id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          color_theme: string | null
          created_at: string | null
          id: string
          theme: string | null
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          color_theme?: string | null
          created_at?: string | null
          id: string
          theme?: string | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          color_theme?: string | null
          created_at?: string | null
          id?: string
          theme?: string | null
          updated_at?: string | null
          username?: string | null
        }
        Relationships: []
      }
      ratings: {
        Row: {
          comment: string | null
          created_at: string | null
          deck_id: string
          id: string
          rating: number
          user_id: string
        }
        Insert: {
          comment?: string | null
          created_at?: string | null
          deck_id: string
          id?: string
          rating: number
          user_id: string
        }
        Update: {
          comment?: string | null
          created_at?: string | null
          deck_id?: string
          id?: string
          rating?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ratings_deck_id_fkey"
            columns: ["deck_id"]
            isOneToOne: false
            referencedRelation: "decks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ratings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      threads: {
        Row: {
          content: string
          created_at: string
          id: number
          image_url: string | null
          is_pinned: boolean | null
          likes: number | null
          title: string
          views: number | null
        }
        Insert: {
          content: string
          created_at?: string
          id?: number
          image_url?: string | null
          is_pinned?: boolean | null
          likes?: number | null
          title: string
          views?: number | null
        }
        Update: {
          content?: string
          created_at?: string
          id?: number
          image_url?: string | null
          is_pinned?: boolean | null
          likes?: number | null
          title?: string
          views?: number | null
        }
        Relationships: []
      }
      user_views: {
        Row: {
          created_at: string
          id: string
          thread_id: number | null
          user_fingerprint: string
        }
        Insert: {
          created_at?: string
          id?: string
          thread_id?: number | null
          user_fingerprint: string
        }
        Update: {
          created_at?: string
          id?: string
          thread_id?: number | null
          user_fingerprint?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_views_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "threads"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      add_friend_by_username: {
        Args: {
          user_id: string
          friend_username: string
        }
        Returns: string
      }
      create_profile: {
        Args: {
          user_id: string
          user_email: string
          user_username: string
        }
        Returns: boolean
      }
      create_profile_for_user: {
        Args: {
          user_id: string
          user_email: string
          user_username: string
        }
        Returns: boolean
      }
      find_user_by_username: {
        Args: {
          search_username: string
        }
        Returns: {
          id: string
          username: string
          avatar_url: string
        }[]
      }
      get_table_info: {
        Args: {
          table_name: string
        }
        Returns: Json
      }
      get_user_friends: {
        Args: {
          user_uuid: string
        }
        Returns: {
          friend_id: string
          username: string
          avatar_url: string
          status: string
          is_sender: boolean
        }[]
      }
      increment_thread_view: {
        Args: {
          thread_id_param: number
          user_fingerprint_param: string
        }
        Returns: undefined
      }
      is_username_available: {
        Args: {
          username: string
        }
        Returns: boolean
      }
      toggle_thread_like: {
        Args: {
          thread_id_param: number
          user_fingerprint_param: string
          is_like_param: boolean
        }
        Returns: undefined
      }
    }
    Enums: {
      budget_level: "budget" | "mid-range" | "luxury"
      region_preference:
        | "europe"
        | "asia"
        | "north_america"
        | "south_america"
        | "africa"
        | "oceania"
        | "middle_east"
      travel_style:
        | "adventure"
        | "relaxation"
        | "cultural"
        | "foodie"
        | "nature"
        | "urban"
        | "beach"
        | "mountain"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
