"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TOurTeam } from "@/lib/types";

export default function TeamCard({ member }: { member: TOurTeam }) {
  return (
    <Card
      className="
      team-card
      p-5
      rounded-2xl
      bg-white/70
      backdrop-blur-md
      border border-primary/10
      shadow-sm
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-lg
      "
    >
      {/* Top Row */}
      <div className="flex gap-4 items-start">
        <Avatar className="h-20 w-20 ring-2 ring-primary/30">
          <AvatarImage src={member.image} className="object-cover" />
          <AvatarFallback>{member.name[0]}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <h3 className="font-semibold text-base lg:text-xl text-neutral-900">
            {member.position === "doctor" ? "Dr. " : ""}{member.name}
          </h3>

          {member.speciality && (
            <p className="text-sm text-primary font-medium">
              {member.speciality}
            </p>
          )}

          {member.qualification && (
            <p className="text-xs text-muted-foreground">
              {member.qualification}
            </p>
          )}
        </div>
      </div>

      {/* Experience */}
      {member.experienceYears && (
        <Badge
          className="
            bg-primary/10
            text-primary
            font-medium
            px-3
            rounded-full
            text-xs
            "
        >
          {member.experienceYears}+ Years Experience
        </Badge>
      )}

      {/* Bio */}
      {member.bio && (
        <p className="text-sm text-neutral-600 leading-relaxed">{member.bio}</p>
      )}
    </Card>
  );
}
