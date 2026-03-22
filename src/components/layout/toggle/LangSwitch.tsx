import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { AntSwitch } from "@/components/layout/toggle/AntSwitch";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

type LangSwitchProps = {
  className?: string;
};

const LangSwitch = ({ className }: LangSwitchProps) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleToggle = () => {
    const newLocale = locale === "en" ? "no" : "en";

    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/") || "/";
    router.push(newPath);
  };

  return (
    <Stack
      className={className}
      direction="row"
      spacing={1}
      sx={{ alignItems: "center" }}
    >
      <Typography>en</Typography>
      <AntSwitch
        checked={locale === "no"}
        onChange={handleToggle}
        inputProps={{ "aria-label": "toggle language" }}
      />
      <Typography>no</Typography>
    </Stack>
  );
};

export default LangSwitch;
