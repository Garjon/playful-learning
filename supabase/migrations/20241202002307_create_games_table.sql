CREATE TABLE playful_learning.games (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES auth.users(id) DEFAULT auth.uid(),
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    activity_type text NOT NULL,
    age_group text NOT NULL,
    energy_level text NOT NULL,
    game_json jsonb NOT NULL
);

ALTER TABLE playful_learning.games ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read access for authenticated users" ON playful_learning.games
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Enable insert for authenticated users" ON playful_learning.games
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Grant permissions to authenticated role
GRANT USAGE ON SCHEMA playful_learning TO authenticated;
GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA "playful_learning" TO authenticated;

-- Grant permissions to admin / service role
GRANT USAGE ON SCHEMA playful_learning TO service_role;
GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA "playful_learning" TO service_role;
