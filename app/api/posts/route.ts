import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import slugify from 'slugify';

// GET all posts (with search, filters, pagination)
export async function GET(request: NextRequest) {
  try {
<<<<<<< HEAD
=======
    const session = await getServerSession(authOptions);

>>>>>>> 3d44e0a9aef41defdaea0723ff2828259f0b1bae
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const status = searchParams.get('status');
    const search = searchParams.get('search');
    const page = parseInt(searchParams.get('page') || '1', 10);
    const pageSize = parseInt(searchParams.get('pageSize') || '9', 10);

    const where: any = {};

<<<<<<< HEAD
    // Only published posts by default
    if (status) {
      where.status = status.toUpperCase();
    } else {
=======
    const isAdmin = !!session && ['ADMIN', 'SUPER_ADMIN'].includes((session.user as any).role);

    // Only published posts by default (public). Admins can see all unless a status filter is provided.
    if (status) {
      where.status = status.toUpperCase();
    } else if (!isAdmin) {
>>>>>>> 3d44e0a9aef41defdaea0723ff2828259f0b1bae
      where.status = 'PUBLISHED';
    }

    if (category && category !== 'all') {
      where.category = category;
    }

    if (search) {
      const searchTerm = search.trim();
      where.OR = [
        { title: { contains: searchTerm, mode: 'insensitive' } },
        { content: { contains: searchTerm, mode: 'insensitive' } },
        { excerpt: { contains: searchTerm, mode: 'insensitive' } },
        { category: { contains: searchTerm, mode: 'insensitive' } },
      ];
    }

    const [total, posts] = await Promise.all([
      prisma.blogPost.count({ where }),
      prisma.blogPost.findMany({
        where,
<<<<<<< HEAD
        include: {
=======
        // IMPORTANT: do NOT read teamId yet; existing rows contain null team_id and the
        // current Prisma query engine is erroring while converting that field.
        select: {
          id: true,
          title: true,
          slug: true,
          excerpt: true,
          category: true,
          status: true,
          featuredImage: true,
          orientation: true,
          publishedAt: true,
          createdAt: true,
          authorId: true,
>>>>>>> 3d44e0a9aef41defdaea0723ff2828259f0b1bae
          author: {
            select: {
              id: true,
              fullName: true,
              email: true,
            },
          },
          likes: true,
          comments: true,
        },
        orderBy: {
          publishedAt: 'desc',
        },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
    ]);

    const items = posts.map((post) => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      category: post.category,
      status: post.status,
      featuredImage: post.featuredImage,
      author: post.author.fullName,
      authorId: post.authorId,
      date: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : null,
      orientation: post.orientation,
      createdAt: post.createdAt,
      likes: post.likes.length,
      comments: post.comments.length,
    }));

    return NextResponse.json({
      items,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
<<<<<<< HEAD
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
=======

    // In dev, surface the real error to the client to unblock debugging.
    if (process.env.NODE_ENV !== 'production') {
      return NextResponse.json(
        {
          error: 'Failed to fetch posts',
          details:
            error instanceof Error
              ? { name: error.name, message: error.message, stack: error.stack }
              : String(error),
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
>>>>>>> 3d44e0a9aef41defdaea0723ff2828259f0b1bae
  }
}

// POST create new post
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !['ADMIN', 'SUPER_ADMIN'].includes((session.user as any).role)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
<<<<<<< HEAD
    const { title, excerpt, content, category, status, featuredImage, orientation } = body;

    if (!title || !content || !category) {
=======
    const { title, excerpt, content, category, status, featuredImage, orientation, teamId } = body as {
      title?: string;
      excerpt?: string;
      content?: string;
      category?: string;
      status?: string;
      featuredImage?: string;
      orientation?: string;
      teamId?: string;
    };

    if (!title || !content || !category || !teamId) {
>>>>>>> 3d44e0a9aef41defdaea0723ff2828259f0b1bae
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const slug = slugify(title, { lower: true, strict: true });

    // Check if slug already exists
    const existingPost = await prisma.blogPost.findUnique({
      where: { slug },
    });

    let finalSlug = slug;
    if (existingPost) {
      finalSlug = `${slug}-${Date.now()}`;
    }

    const post = await prisma.blogPost.create({
<<<<<<< HEAD
=======
      // Use UncheckedCreateInput to allow setting relation scalar teamId directly
>>>>>>> 3d44e0a9aef41defdaea0723ff2828259f0b1bae
      data: {
        title,
        slug: finalSlug,
        excerpt: excerpt || null,
        content,
        category,
<<<<<<< HEAD
        status: status || 'DRAFT',
        featuredImage: featuredImage || null,
        orientation: orientation || 'LANDSCAPE',
        authorId: (session.user as any).id,
        publishedAt: status === 'PUBLISHED' ? new Date() : null,
      },
=======
        status: (status as any) || 'DRAFT',
        featuredImage: featuredImage || null,
        orientation: orientation || 'LANDSCAPE',
        teamId,
        authorId: (session.user as any).id,
        publishedAt: status === 'PUBLISHED' ? new Date() : null,
      } as any,
>>>>>>> 3d44e0a9aef41defdaea0723ff2828259f0b1bae
      include: {
        author: {
          select: {
            fullName: true,
          },
        },
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
}
