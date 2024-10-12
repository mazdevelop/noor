import dbConnect from './db';
import Product from '../models/Product';
import fs from 'fs';
import path from 'path';

export async function getTranslations(locale: string) {
  await dbConnect();

  // Fetch translations from the database
  const Product = await Product.find().lean();

  const messagesFromDb = Product.reduce((messages: any, content) => {
    messages[content.page] = content.content[locale];
    return messages;
  }, {});

  // Load messages from JSON files as a fallback
  const messagesFilePath = path.join(process.cwd(), 'src', 'messages', `${locale}.json`);
  let messagesFromFile = {};
  if (fs.existsSync(messagesFilePath)) {
    messagesFromFile = JSON.parse(fs.readFileSync(messagesFilePath, 'utf-8'));
  }

  // Merge messages (database messages take precedence)
  return {
    ...messagesFromFile,
    ...messagesFromDb,
  };
}
