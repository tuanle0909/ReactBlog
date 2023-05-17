import { useRouter } from "next/router";
import { useState } from "react";
import Input from "../shared/Input";

function HeaderSearch() {
  const [value, setValue] = useState("");
  const router = useRouter();
  const search = (e: any) => {
    e.preventDefault();
    if (value !== "") {
      setValue("");
      router.push("/search/" + value);
    }
  };
  return (
    <div className="tcl-col-4">
      {/* Header Search */}
      <form
        onSubmit={(e) => {
          search(e);
        }}
      >
        <Input
          type="search"
          placeholder="Nhập từ khóa tìm kiếm ..."
          onChange={(e: any) => {
            setValue(e.target.value);
          }}
          value={value}
        />
      </form>
    </div>
  );
}

export default HeaderSearch;
