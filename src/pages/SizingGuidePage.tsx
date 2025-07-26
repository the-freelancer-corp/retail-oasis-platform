
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const SizingGuidePage = () => {
  const womenSizes = [
    { us: 'XS', uk: '4', eu: '32', bust: '32"', waist: '24"', hip: '34"' },
    { us: 'S', uk: '6', eu: '34', bust: '34"', waist: '26"', hip: '36"' },
    { us: 'M', uk: '8', eu: '36', bust: '36"', waist: '28"', hip: '38"' },
    { us: 'L', uk: '10', eu: '38', bust: '38"', waist: '30"', hip: '40"' },
    { us: 'XL', uk: '12', eu: '40', bust: '40"', waist: '32"', hip: '42"' },
    { us: 'XXL', uk: '14', eu: '42', bust: '42"', waist: '34"', hip: '44"' }
  ];

  const menSizes = [
    { us: 'XS', uk: '34', eu: '44', chest: '34-36"', waist: '28-30"', hip: '34-36"' },
    { us: 'S', uk: '36', eu: '46', chest: '36-38"', waist: '30-32"', hip: '36-38"' },
    { us: 'M', uk: '38', eu: '48', chest: '38-40"', waist: '32-34"', hip: '38-40"' },
    { us: 'L', uk: '40', eu: '50', chest: '40-42"', waist: '34-36"', hip: '40-42"' },
    { us: 'XL', uk: '42', eu: '52', chest: '42-44"', waist: '36-38"', hip: '42-44"' },
    { us: 'XXL', uk: '44', eu: '54', chest: '44-46"', waist: '38-40"', hip: '44-46"' }
  ];

  const footwearSizes = [
    { us_women: '5', us_men: '3.5', uk: '2.5', eu: '35' },
    { us_women: '6', us_men: '4.5', uk: '3.5', eu: '36' },
    { us_women: '7', us_men: '5.5', uk: '4.5', eu: '37' },
    { us_women: '8', us_men: '6.5', uk: '5.5', eu: '38' },
    { us_women: '9', us_men: '7.5', uk: '6.5', eu: '39' },
    { us_women: '10', us_men: '8.5', uk: '7.5', eu: '40' },
    { us_women: '11', us_men: '9.5', uk: '8.5', eu: '41' }
  ];

  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Size Guide</h1>
            <p className="text-lg text-muted-foreground">
              Find the perfect fit for your style with our comprehensive size guide
            </p>
          </div>

          <Tabs defaultValue="women" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="women">Women</TabsTrigger>
              <TabsTrigger value="men">Men</TabsTrigger>
              <TabsTrigger value="footwear">Footwear</TabsTrigger>
            </TabsList>
            
            <TabsContent value="women" className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Women's Clothing Sizes</h2>
                <p className="mb-6">Use these measurements as a guide to find your perfect size. For the most accurate fit, we recommend taking your own measurements and comparing them with the size chart below.</p>
                
                <div className="border rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[80px] font-medium">US</TableHead>
                        <TableHead className="w-[80px] font-medium">UK</TableHead>
                        <TableHead className="w-[80px] font-medium">EU</TableHead>
                        <TableHead className="font-medium">Bust</TableHead>
                        <TableHead className="font-medium">Waist</TableHead>
                        <TableHead className="font-medium">Hip</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {womenSizes.map((size, index) => (
                        <TableRow key={index}>
                          <TableCell>{size.us}</TableCell>
                          <TableCell>{size.uk}</TableCell>
                          <TableCell>{size.eu}</TableCell>
                          <TableCell>{size.bust}</TableCell>
                          <TableCell>{size.waist}</TableCell>
                          <TableCell>{size.hip}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                
                <div className="mt-6 bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">How to Measure</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Bust</strong>: Measure around the fullest part of your bust, keeping the tape parallel to the floor.</li>
                    <li><strong>Waist</strong>: Measure around your natural waistline, keeping the tape comfortably loose.</li>
                    <li><strong>Hips</strong>: Measure around the fullest part of your hips, about 8" below your waistline.</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="men" className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Men's Clothing Sizes</h2>
                <p className="mb-6">Use these measurements as a guide to find your perfect size. For the most accurate fit, we recommend taking your own measurements and comparing them with the size chart below.</p>
                
                <div className="border rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[80px] font-medium">US</TableHead>
                        <TableHead className="w-[80px] font-medium">UK</TableHead>
                        <TableHead className="w-[80px] font-medium">EU</TableHead>
                        <TableHead className="font-medium">Chest</TableHead>
                        <TableHead className="font-medium">Waist</TableHead>
                        <TableHead className="font-medium">Hip</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {menSizes.map((size, index) => (
                        <TableRow key={index}>
                          <TableCell>{size.us}</TableCell>
                          <TableCell>{size.uk}</TableCell>
                          <TableCell>{size.eu}</TableCell>
                          <TableCell>{size.chest}</TableCell>
                          <TableCell>{size.waist}</TableCell>
                          <TableCell>{size.hip}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                
                <div className="mt-6 bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">How to Measure</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Chest</strong>: Measure around the fullest part of your chest, keeping the tape parallel to the floor.</li>
                    <li><strong>Waist</strong>: Measure around your natural waistline, keeping the tape comfortably loose.</li>
                    <li><strong>Hip</strong>: Measure around the fullest part of your hip, approximately 8" below your waistline.</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="footwear" className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Footwear Size Conversion</h2>
                <p className="mb-6">Use this chart to find your shoe size across different international sizing systems. For the best fit, we recommend measuring your feet and referring to the size chart below.</p>
                
                <div className="border rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-medium">US Women</TableHead>
                        <TableHead className="font-medium">US Men</TableHead>
                        <TableHead className="font-medium">UK</TableHead>
                        <TableHead className="font-medium">EU</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {footwearSizes.map((size, index) => (
                        <TableRow key={index}>
                          <TableCell>{size.us_women}</TableCell>
                          <TableCell>{size.us_men}</TableCell>
                          <TableCell>{size.uk}</TableCell>
                          <TableCell>{size.eu}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                
                <div className="mt-6 bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">How to Measure Your Foot</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Place a piece of paper on the floor against a wall.</li>
                    <li>Stand on the paper with your heel against the wall.</li>
                    <li>Mark the longest part of your foot on the paper.</li>
                    <li>Measure the distance from the wall to the mark in centimeters or inches.</li>
                    <li>Add 0.5cm or 0.25" to your measurement to allow for movement.</li>
                  </ol>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="bg-secondary p-6 rounded-lg mt-10">
            <h2 className="text-xl font-semibold mb-3">Need More Help?</h2>
            <p className="mb-4">Our customer service team is available to assist you with any sizing questions you may have.</p>
            <p className="text-muted-foreground">Contact us at <span className="font-medium text-foreground">support@elocin.com</span> or call <span className="font-medium text-foreground">+1 (555) 123-4567</span> during business hours.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SizingGuidePage;
