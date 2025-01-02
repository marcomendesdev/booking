import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  return (
    <div key="1" className="border-2 border-gray-300 dark:border-gray-700 p-4 rounded-md shadow-md space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Please fill the below form and we will get back to you as soon as possible.
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="name">
            Name
          </Label>
          <Input
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="flex space-x-2 space-y-2 items-end">
          <div className="w-1/12 space-y-2">
            <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="prefix">
              Prefix
            </Label>
            <div className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 w-full">
              <Select>
                <SelectTrigger id="prefix" required>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="mr">Mr.</SelectItem>
                    <SelectItem value="ms">Ms.</SelectItem>
                    <SelectItem value="mrs">Mrs.</SelectItem>
                    <SelectItem value="dr">Dr.</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="w-11/12 space-y-2">
            <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="surname">
              Surname
            </Label>
            <Input
              className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
              id="surname"
              placeholder="Enter your surname"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="email">
            Email
          </Label>
          <Input
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="space-y-2">
          <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="message">
            Message
          </Label>
          <Input
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            id="message"
            placeholder="Enter your message"
            required
          />
        </div>
        <div className="space-y-2">
          <Checkbox id="subscribe" />
          <Label className="text-gray-600 dark:text-gray-400" htmlFor="subscribe">
            Subscribe to our newsletter
          </Label>
        </div>
        <Button type="submit" className="bg-blue-500 text-white">
          Submit
        </Button>
      </div>
    </div>
  );
}