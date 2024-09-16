'use client'

import { 
  Button,
  Input,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent 
} from "@nextui-org/react"
import { useFormState } from "react-dom"
import * as actions from "@/actions"
import FormButton from "@/components/common/form-button"

interface PostCreateFormprops {
  slug: string
}

export default function PostCreateForm({ slug }: PostCreateFormprops) {

  const [formState, action] = useFormState(actions.createPost.bind(null, slug), {
    errors: {}
  })

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create Post</h3>
            <Input 
              name="title" 
              label="Title" 
              labelPlacement="outside" 
              placeholder="Title"
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(', ')}
            />
            <Textarea 
              name="content" 
              label="Content" 
              labelPlacement="outside" 
              placeholder="Write your post"
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(', ')}
            />

            {formState.errors._form ? <div className="p-2 bg-red-200 border rounded border-red-400 text-red-800">{formState.errors._form.join(', ')}</div> : null}

            <FormButton>Create</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}