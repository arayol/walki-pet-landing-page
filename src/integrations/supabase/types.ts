export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      client_access_tokens: {
        Row: {
          client_id: string
          created_at: string
          expires_at: string
          id: string
          token: string
          used: boolean | null
        }
        Insert: {
          client_id: string
          created_at?: string
          expires_at: string
          id?: string
          token: string
          used?: boolean | null
        }
        Update: {
          client_id?: string
          created_at?: string
          expires_at?: string
          id?: string
          token?: string
          used?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "client_access_tokens_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["client_id"]
          },
        ]
      }
      clients: {
        Row: {
          additional_schedule_notes: string | null
          address: string | null
          client_id: string
          client_name: string
          created_at: string | null
          emergency_contact: string | null
          has_password: boolean | null
          is_active: boolean | null
          pet_age: number | null
          pet_breed: string | null
          pet_name: string
          pet_notes: string | null
          preferred_days: string[] | null
          preferred_times: string[] | null
          updated_at: string | null
          walker_id: string
        }
        Insert: {
          additional_schedule_notes?: string | null
          address?: string | null
          client_id: string
          client_name: string
          created_at?: string | null
          emergency_contact?: string | null
          has_password?: boolean | null
          is_active?: boolean | null
          pet_age?: number | null
          pet_breed?: string | null
          pet_name: string
          pet_notes?: string | null
          preferred_days?: string[] | null
          preferred_times?: string[] | null
          updated_at?: string | null
          walker_id: string
        }
        Update: {
          additional_schedule_notes?: string | null
          address?: string | null
          client_id?: string
          client_name?: string
          created_at?: string | null
          emergency_contact?: string | null
          has_password?: boolean | null
          is_active?: boolean | null
          pet_age?: number | null
          pet_breed?: string | null
          pet_name?: string
          pet_notes?: string | null
          preferred_days?: string[] | null
          preferred_times?: string[] | null
          updated_at?: string | null
          walker_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "clients_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clients_walker_id_fkey"
            columns: ["walker_id"]
            isOneToOne: false
            referencedRelation: "walker_analytics"
            referencedColumns: ["walker_id"]
          },
          {
            foreignKeyName: "clients_walker_id_fkey"
            columns: ["walker_id"]
            isOneToOne: false
            referencedRelation: "walkers"
            referencedColumns: ["walker_id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          client_id: string
          created_at: string | null
          currency: string | null
          customer_email: string | null
          customer_name: string | null
          due_date: string | null
          id: string
          metadata: Json | null
          paid_at: string | null
          payment_intent_id: string | null
          payment_method: string | null
          payment_method_types: string[] | null
          payment_type: string | null
          status: string
          stripe_customer_id: string | null
          stripe_payment_id: string | null
          stripe_session_id: string | null
          stripe_session_url: string | null
          updated_at: string | null
          walk_id: string | null
          walker_id: string
        }
        Insert: {
          amount: number
          client_id: string
          created_at?: string | null
          currency?: string | null
          customer_email?: string | null
          customer_name?: string | null
          due_date?: string | null
          id?: string
          metadata?: Json | null
          paid_at?: string | null
          payment_intent_id?: string | null
          payment_method?: string | null
          payment_method_types?: string[] | null
          payment_type?: string | null
          status?: string
          stripe_customer_id?: string | null
          stripe_payment_id?: string | null
          stripe_session_id?: string | null
          stripe_session_url?: string | null
          updated_at?: string | null
          walk_id?: string | null
          walker_id: string
        }
        Update: {
          amount?: number
          client_id?: string
          created_at?: string | null
          currency?: string | null
          customer_email?: string | null
          customer_name?: string | null
          due_date?: string | null
          id?: string
          metadata?: Json | null
          paid_at?: string | null
          payment_intent_id?: string | null
          payment_method?: string | null
          payment_method_types?: string[] | null
          payment_type?: string | null
          status?: string
          stripe_customer_id?: string | null
          stripe_payment_id?: string | null
          stripe_session_id?: string | null
          stripe_session_url?: string | null
          updated_at?: string | null
          walk_id?: string | null
          walker_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "payments_walk_id_fkey"
            columns: ["walk_id"]
            isOneToOne: false
            referencedRelation: "walks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_walker_id_fkey"
            columns: ["walker_id"]
            isOneToOne: false
            referencedRelation: "walker_analytics"
            referencedColumns: ["walker_id"]
          },
          {
            foreignKeyName: "payments_walker_id_fkey"
            columns: ["walker_id"]
            isOneToOne: false
            referencedRelation: "walkers"
            referencedColumns: ["walker_id"]
          },
        ]
      }
      plan_capacity_slots: {
        Row: {
          created_at: string
          current_bookings: number
          id: string
          max_capacity: number
          scheduled_date: string
          scheduled_time: string
          service_plan_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          current_bookings?: number
          id?: string
          max_capacity?: number
          scheduled_date: string
          scheduled_time: string
          service_plan_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          current_bookings?: number
          id?: string
          max_capacity?: number
          scheduled_date?: string
          scheduled_time?: string
          service_plan_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "plan_capacity_slots_service_plan_id_fkey"
            columns: ["service_plan_id"]
            isOneToOne: false
            referencedRelation: "service_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string
          id: string
          name: string
          role: string
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email: string
          id: string
          name: string
          role: string
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string
          id?: string
          name?: string
          role?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      service_bookings: {
        Row: {
          client_id: string
          created_at: string | null
          data_agendamento: string
          data_hora_fim: string
          data_hora_inicio: string
          id: string
          observacoes: string | null
          service_schedule_id: string
          status: string | null
          updated_at: string | null
          walker_id: string
        }
        Insert: {
          client_id: string
          created_at?: string | null
          data_agendamento: string
          data_hora_fim: string
          data_hora_inicio: string
          id?: string
          observacoes?: string | null
          service_schedule_id: string
          status?: string | null
          updated_at?: string | null
          walker_id: string
        }
        Update: {
          client_id?: string
          created_at?: string | null
          data_agendamento?: string
          data_hora_fim?: string
          data_hora_inicio?: string
          id?: string
          observacoes?: string | null
          service_schedule_id?: string
          status?: string | null
          updated_at?: string | null
          walker_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "service_bookings_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "service_bookings_service_schedule_id_fkey"
            columns: ["service_schedule_id"]
            isOneToOne: false
            referencedRelation: "service_schedules"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_bookings_walker_id_fkey"
            columns: ["walker_id"]
            isOneToOne: false
            referencedRelation: "walker_analytics"
            referencedColumns: ["walker_id"]
          },
          {
            foreignKeyName: "service_bookings_walker_id_fkey"
            columns: ["walker_id"]
            isOneToOne: false
            referencedRelation: "walkers"
            referencedColumns: ["walker_id"]
          },
        ]
      }
      service_plans: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          image_url: string | null
          includes_bath: boolean | null
          includes_feeding: boolean | null
          includes_grooming: boolean | null
          includes_playtime: boolean | null
          is_active: boolean | null
          is_recurring: boolean | null
          name: string
          price: number
          recurrence_type: string | null
          updated_at: string | null
          walk_count: number
          walker_id: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          includes_bath?: boolean | null
          includes_feeding?: boolean | null
          includes_grooming?: boolean | null
          includes_playtime?: boolean | null
          is_active?: boolean | null
          is_recurring?: boolean | null
          name: string
          price: number
          recurrence_type?: string | null
          updated_at?: string | null
          walk_count?: number
          walker_id: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          includes_bath?: boolean | null
          includes_feeding?: boolean | null
          includes_grooming?: boolean | null
          includes_playtime?: boolean | null
          is_active?: boolean | null
          is_recurring?: boolean | null
          name?: string
          price?: number
          recurrence_type?: string | null
          updated_at?: string | null
          walk_count?: number
          walker_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "service_plans_walker_id_fkey"
            columns: ["walker_id"]
            isOneToOne: false
            referencedRelation: "walker_analytics"
            referencedColumns: ["walker_id"]
          },
          {
            foreignKeyName: "service_plans_walker_id_fkey"
            columns: ["walker_id"]
            isOneToOne: false
            referencedRelation: "walkers"
            referencedColumns: ["walker_id"]
          },
        ]
      }
      service_regions: {
        Row: {
          cep: string
          created_at: string | null
          id: string
          is_active: boolean | null
          raio_km: number
          service_plan_id: string
          updated_at: string | null
        }
        Insert: {
          cep: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          raio_km?: number
          service_plan_id: string
          updated_at?: string | null
        }
        Update: {
          cep?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          raio_km?: number
          service_plan_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "service_regions_service_plan_id_fkey"
            columns: ["service_plan_id"]
            isOneToOne: false
            referencedRelation: "service_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      service_schedules: {
        Row: {
          capacidade_maxima: number
          created_at: string | null
          dia_semana: number
          hora_fim: string
          hora_inicio: string
          id: string
          is_active: boolean | null
          service_plan_id: string
          service_region_id: string
          updated_at: string | null
          vagas_disponiveis: number
        }
        Insert: {
          capacidade_maxima?: number
          created_at?: string | null
          dia_semana: number
          hora_fim: string
          hora_inicio: string
          id?: string
          is_active?: boolean | null
          service_plan_id: string
          service_region_id: string
          updated_at?: string | null
          vagas_disponiveis?: number
        }
        Update: {
          capacidade_maxima?: number
          created_at?: string | null
          dia_semana?: number
          hora_fim?: string
          hora_inicio?: string
          id?: string
          is_active?: boolean | null
          service_plan_id?: string
          service_region_id?: string
          updated_at?: string | null
          vagas_disponiveis?: number
        }
        Relationships: [
          {
            foreignKeyName: "service_schedules_service_plan_id_fkey"
            columns: ["service_plan_id"]
            isOneToOne: false
            referencedRelation: "service_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_schedules_service_region_id_fkey"
            columns: ["service_region_id"]
            isOneToOne: false
            referencedRelation: "service_regions"
            referencedColumns: ["id"]
          },
        ]
      }
      walkers: {
        Row: {
          additional_services: string[] | null
          availability: Json | null
          bio: string | null
          branding: Json | null
          certifications: string[] | null
          cpf: string | null
          created_at: string | null
          device_fingerprint: string | null
          emergency_available: boolean | null
          google_access_token: string | null
          google_calendar_connected: boolean | null
          google_last_sync: string | null
          google_refresh_token: string | null
          has_transport: boolean | null
          instagram_access_token: string | null
          instagram_account_type: string | null
          instagram_last_sync: string | null
          instagram_user_id: string | null
          instagram_username: string | null
          is_active: boolean | null
          languages_spoken: string[] | null
          location: string | null
          max_clients: number | null
          pet_size_preference: string[] | null
          phone: string | null
          plan_type: string | null
          rating: number | null
          regions_served: Json | null
          services: Json | null
          slug: string | null
          specialties: string[] | null
          stripe_account_id: string | null
          stripe_onboarding_complete: boolean | null
          terms_accepted_at: string | null
          total_reviews: number | null
          trial_days: number | null
          trial_start: string | null
          updated_at: string | null
          walker_id: string
          years_experience: number | null
        }
        Insert: {
          additional_services?: string[] | null
          availability?: Json | null
          bio?: string | null
          branding?: Json | null
          certifications?: string[] | null
          cpf?: string | null
          created_at?: string | null
          device_fingerprint?: string | null
          emergency_available?: boolean | null
          google_access_token?: string | null
          google_calendar_connected?: boolean | null
          google_last_sync?: string | null
          google_refresh_token?: string | null
          has_transport?: boolean | null
          instagram_access_token?: string | null
          instagram_account_type?: string | null
          instagram_last_sync?: string | null
          instagram_user_id?: string | null
          instagram_username?: string | null
          is_active?: boolean | null
          languages_spoken?: string[] | null
          location?: string | null
          max_clients?: number | null
          pet_size_preference?: string[] | null
          phone?: string | null
          plan_type?: string | null
          rating?: number | null
          regions_served?: Json | null
          services?: Json | null
          slug?: string | null
          specialties?: string[] | null
          stripe_account_id?: string | null
          stripe_onboarding_complete?: boolean | null
          terms_accepted_at?: string | null
          total_reviews?: number | null
          trial_days?: number | null
          trial_start?: string | null
          updated_at?: string | null
          walker_id: string
          years_experience?: number | null
        }
        Update: {
          additional_services?: string[] | null
          availability?: Json | null
          bio?: string | null
          branding?: Json | null
          certifications?: string[] | null
          cpf?: string | null
          created_at?: string | null
          device_fingerprint?: string | null
          emergency_available?: boolean | null
          google_access_token?: string | null
          google_calendar_connected?: boolean | null
          google_last_sync?: string | null
          google_refresh_token?: string | null
          has_transport?: boolean | null
          instagram_access_token?: string | null
          instagram_account_type?: string | null
          instagram_last_sync?: string | null
          instagram_user_id?: string | null
          instagram_username?: string | null
          is_active?: boolean | null
          languages_spoken?: string[] | null
          location?: string | null
          max_clients?: number | null
          pet_size_preference?: string[] | null
          phone?: string | null
          plan_type?: string | null
          rating?: number | null
          regions_served?: Json | null
          services?: Json | null
          slug?: string | null
          specialties?: string[] | null
          stripe_account_id?: string | null
          stripe_onboarding_complete?: boolean | null
          terms_accepted_at?: string | null
          total_reviews?: number | null
          trial_days?: number | null
          trial_start?: string | null
          updated_at?: string | null
          walker_id?: string
          years_experience?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "walkers_walker_id_fkey"
            columns: ["walker_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      walks: {
        Row: {
          client_id: string
          created_at: string | null
          duration: number
          id: string
          is_recurring: boolean | null
          notes: string | null
          photos: string[] | null
          price: number
          recurrence_group_id: string | null
          recurrence_sequence: number | null
          report: string | null
          scheduled_at: string
          service_plan_id: string | null
          service_type: string
          status: string
          updated_at: string | null
          walker_id: string
        }
        Insert: {
          client_id: string
          created_at?: string | null
          duration: number
          id?: string
          is_recurring?: boolean | null
          notes?: string | null
          photos?: string[] | null
          price: number
          recurrence_group_id?: string | null
          recurrence_sequence?: number | null
          report?: string | null
          scheduled_at: string
          service_plan_id?: string | null
          service_type: string
          status?: string
          updated_at?: string | null
          walker_id: string
        }
        Update: {
          client_id?: string
          created_at?: string | null
          duration?: number
          id?: string
          is_recurring?: boolean | null
          notes?: string | null
          photos?: string[] | null
          price?: number
          recurrence_group_id?: string | null
          recurrence_sequence?: number | null
          report?: string | null
          scheduled_at?: string
          service_plan_id?: string | null
          service_type?: string
          status?: string
          updated_at?: string | null
          walker_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "walks_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "walks_service_plan_id_fkey"
            columns: ["service_plan_id"]
            isOneToOne: false
            referencedRelation: "service_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "walks_walker_id_fkey"
            columns: ["walker_id"]
            isOneToOne: false
            referencedRelation: "walker_analytics"
            referencedColumns: ["walker_id"]
          },
          {
            foreignKeyName: "walks_walker_id_fkey"
            columns: ["walker_id"]
            isOneToOne: false
            referencedRelation: "walkers"
            referencedColumns: ["walker_id"]
          },
        ]
      }
    }
    Views: {
      walker_analytics: {
        Row: {
          created_at: string | null
          rating: number | null
          slug: string | null
          total_bookings: number | null
          total_clients: number | null
          total_regions: number | null
          total_revenue: number | null
          total_reviews: number | null
          total_schedules: number | null
          total_service_plans: number | null
          walker_id: string | null
          walker_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "walkers_walker_id_fkey"
            columns: ["walker_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      debug_booking_validation: {
        Args: { p_date: string; p_service_plan_id: string; p_time: string }
        Returns: {
          capacidade_maxima: number
          debug_step: string
          dia_semana_date: number
          dia_semana_db: number
          found_schedule: boolean
          hora_fim: string
          hora_inicio: string
          schedule_active: boolean
          schedule_id: string
          time_in_range: boolean
          vagas_disponiveis: number
        }[]
      }
      generate_client_access_token: {
        Args: { p_client_id: string }
        Returns: Json
      }
      get_available_slots: {
        Args: { p_date: string; p_schedule_id: string }
        Returns: number
      }
      get_available_slots_for_plan: {
        Args: { p_date: string; p_service_plan_id: string; p_time: string }
        Returns: number
      }
      get_plan_availability: {
        Args: {
          p_end_date?: string
          p_service_plan_id: string
          p_start_date?: string
        }
        Returns: {
          available_slots: number
          current_bookings: number
          day_of_week: number
          end_time: string
          is_available: boolean
          is_recurring: boolean
          max_capacity: number
          plan_id: string
          plan_name: string
          plan_type: string
          schedule_date: string
          start_time: string
          walk_count: number
        }[]
      }
      get_user_role: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_walker_performance_report: {
        Args: {
          p_end_date?: string
          p_start_date?: string
          p_walker_id: string
        }
        Returns: Json
      }
      is_client: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_walker: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      migrate_existing_service_plans: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      refresh_walker_analytics: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      register_client_via_invite: {
        Args:
          | {
              p_additional_schedule_notes?: string
              p_address?: string
              p_client_email: string
              p_client_name: string
              p_emergency_contact?: string
              p_pet_age?: number
              p_pet_breed?: string
              p_pet_name: string
              p_pet_notes?: string
              p_preferred_days?: string[]
              p_preferred_times?: string[]
              p_walker_id: string
            }
          | {
              p_address?: string
              p_client_email: string
              p_client_name: string
              p_emergency_contact?: string
              p_pet_age?: number
              p_pet_breed?: string
              p_pet_name: string
              p_pet_notes?: string
              p_walker_id: string
            }
        Returns: Json
      }
      set_client_password_defined: {
        Args: { p_client_id: string }
        Returns: Json
      }
      should_require_upgrade: {
        Args: { p_walker_id: string }
        Returns: Json
      }
      validate_booking_slots: {
        Args: { p_selected_slots: Json; p_service_plan_id: string }
        Returns: {
          error_message: string
          is_valid: boolean
          slot_validations: Json
        }[]
      }
      validate_client_access_token: {
        Args: { p_token: string }
        Returns: Json
      }
      validate_cpf: {
        Args: { cpf_input: string }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
