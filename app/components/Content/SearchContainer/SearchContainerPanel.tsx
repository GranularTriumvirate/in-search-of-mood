import { Button, Divider } from "@nextui-org/react";
import SearchForm from "./SearchForm/SearchForm";

export default async function SearchContainerPanel() {
  return (
    <div className="container mx-auto w-full">
      <span className="italic">Find some recommendations</span>
      <Divider className="mt-6" />
      <SearchForm />
      <div className="px-4 text-right">
        <Button>Let's go!</Button>
      </div>
    </div>
  );
}
