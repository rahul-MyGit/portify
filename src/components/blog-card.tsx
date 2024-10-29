"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn, formatDate } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  iconUrl: string;
  title: string;
  readTime?: string;
  href?: string;
  badges?: readonly string[];
  publishedAt: string;
  description?: string;
}

export const BlogCard = ({
  title,
  href,
  badges,
  description,
  iconUrl,
  readTime,
  publishedAt,
}: BlogCardProps) => {
  return (
    <Link href={href || "#"} className="block w-full group">
      <Card className="transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
        <div className="flex items-center p-4 space-x-4 relative">
          {/* Avatar Section */}
          <div className="flex-shrink-0">
            <Avatar className="w-16 h-16 rounded-xl border-2 border-muted shadow-sm transition-transform duration-300 group-hover:scale-105">
              <AvatarImage
                src={iconUrl}
                alt={title}
                className="object-contain p-2"
              />
              <AvatarFallback className="text-lg font-medium">
                {title[0]}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Content Section */}
          <div className="flex-grow min-w-0">
            <CardHeader className="p-0 space-y-2">
              {/* Title and Read Time Row */}
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="font-semibold text-base md:text-lg truncate group-hover:text-primary transition-colors duration-200">
                  {title}
                  <ChevronRightIcon className="inline-block ml-2 w-4 h-4 transform transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
                </h3>
                <div className="flex-shrink-0 text-xs md:text-sm text-muted-foreground tabular-nums">
                  {readTime} read
                </div>
              </div>

              {/* Badges Row */}
              {badges && badges.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {badges.map((badge, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs px-2 py-0.5 bg-opacity-80 hover:bg-opacity-100 transition-all duration-200"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Date */}
              {publishedAt && (
                <div className="text-xs text-muted-foreground">
                  {formatDate(publishedAt)}
                </div>
              )}

              {/* Description */}
              {description && (
                <p className="text-sm text-muted-foreground line-clamp-2 pr-4">
                  {description}
                </p>
              )}
            </CardHeader>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;
