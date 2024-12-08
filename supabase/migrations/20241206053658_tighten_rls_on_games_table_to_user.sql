DROP POLICY "Enable read access for authenticated users" ON playful_learning.games;

CREATE POLICY "Enable read access for game owner" ON playful_learning.games
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);
