"""Collect the landing page's full code listings from the real demo apps (run from anywhere)."""
import json, pathlib
R = pathlib.Path("/home/abe/osvauld2")
def f(path, name=None): return {"name": name or pathlib.Path(path).name, "lang": "lua", "code": (R / path).read_text().replace("\t", "  ").rstrip("\n")}
def app(d, *names): return [f(f"demo_apps/{d}/{n}.lua", n + ".lua") for n in names]

A = {}
exec(compile((R / "scripts/agent_builds_src.py").read_text(), "src", "exec"), A)
def diff(edits):
    out = []
    for cap, reps in edits.values():
        out.append(f"# {cap}")
        for old, new in reps:
            out += ["@@"] + ["-" + l for l in old.rstrip("\n").split("\n")] + ["+" + l for l in new.rstrip("\n").split("\n")] + [""]
    return "\n".join(out).replace("    ", "  ")

D = {
  "kanban": app("kanban", "main", "model", "ui/widgets", "theme"),
  "sync_two_users": app("chat", "main", "model", "index", "theme"),
  "asset_editor": app("asset_editor", "main", "model", "stage", "inspector", "handles", "theme", "seed/hero", "seed/clips", "seed/toggle", "seed/chest", "seed/hat", "seed/crate", "seed/room"),
  "gravity_lab": app("gravity_lab", "main"),
  "voronoi": app("voronoi", "main", "model", "voronoi", "theme"),
  "physics_playground": app("physics_playground", "main"),
  "agent_builds": [
    {"name": "main.lua (start)", "lang": "lua", "code": A["V0"].replace("    ", "  ").rstrip("\n")},
    {"name": "edits (sent by the agent)", "lang": "diff", "code": diff(A["EDITS"])},
    {"name": "stats.lua (new file)", "lang": "lua", "code": A["STATS_LUA"].replace("    ", "  ").rstrip("\n")},
  ],
  "workspace_custom": [
    f("shell2/src/launcher/theme.lua", "theme.lua"), f("shell2/src/launcher/main.lua", "main.lua"),
    {"name": "edits (applied live)", "lang": "diff", "code": """# theme.lua, typed in the in-shell Customize editor, then Save & apply
-  bg = "#10141d",
+  bg = "#1a1410",
-  panel = "#1a2130",
+  panel = "#2a1f18",
-  accent = "#83adff",
+  accent = "#ff9f6b",

# main.lua, sent by an agent over the bridge (edit_launcher_file)
-  "Your apps"
+  #cards .. " things in " .. snapshot.workspace.name

-  w = 200, min_w = 180, h = 144, pad = 18, gap = 12,
+  w = 430, min_w = 180, h = 110, pad = 18, gap = 6,

# a broken edit is refused and the workspace keeps running;
# Reset launcher restores the original."""},
  ],
}
json.dump(D, open(pathlib.Path.home() / "landing/src/data/code.json", "w"))
for k, v in D.items(): print(k, [(x["name"], len(x["code"].split("\n"))) for x in v])
