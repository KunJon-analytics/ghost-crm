import ReviewForm from "@/components/forms/review-form";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ReviewTaskPage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Review Document</CardTitle>
        <CardDescription>Please review the document presented</CardDescription>
      </CardHeader>
      <ReviewForm />
    </Card>
  );
};

export default ReviewTaskPage;
