
import React, { useState } from 'react';
import { PlusCircle, Edit, Trash2, Home, Building } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import AccountLayout from '@/components/account/AccountLayout';
import AddressForm from '@/components/account/AddressForm';

// Sample address data (would come from API in real app)
const initialAddresses = [
  {
    id: 1,
    type: "home",
    name: "John Doe",
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States",
    phone: "123-456-7890",
    isDefault: true
  },
  {
    id: 2,
    type: "office",
    name: "John Doe",
    address: "456 Office Plaza",
    city: "Chicago",
    state: "IL",
    zipCode: "60601",
    country: "United States",
    phone: "123-456-7890",
    isDefault: false
  }
];

const AddressesPage = () => {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [editingAddress, setEditingAddress] = useState<any>(null);
  const { toast } = useToast();

  const handleDelete = (id: number) => {
    setAddresses(addresses.filter(address => address.id !== id));
    toast({
      title: "Address deleted",
      description: "The address has been removed from your account."
    });
  };

  const handleSetDefault = (id: number) => {
    setAddresses(
      addresses.map(address => ({
        ...address,
        isDefault: address.id === id
      }))
    );
    toast({
      title: "Default address updated",
      description: "Your default address has been updated."
    });
  };

  return (
    <AccountLayout title="My Addresses">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addresses.map((address) => (
            <Card key={address.id} className={address.isDefault ? "border-primary" : ""}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {address.type === "home" ? <Home className="h-4 w-4" /> : <Building className="h-4 w-4" />}
                  {address.type === "home" ? "Home" : "Office"} Address
                  {address.isDefault && (
                    <Badge variant="outline" className="ml-2 text-xs bg-primary text-primary-foreground">
                      Default
                    </Badge>
                  )}
                </CardTitle>
                <CardDescription>{address.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{address.address}</p>
                <p className="text-sm">{address.city}, {address.state} {address.zipCode}</p>
                <p className="text-sm">{address.country}</p>
                <p className="text-sm mt-2">{address.phone}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setEditingAddress(address)}
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Address</DialogTitle>
                      </DialogHeader>
                      <AddressForm 
                        initialData={editingAddress} 
                        onSubmit={(data) => {
                          setAddresses(addresses.map(a => 
                            a.id === editingAddress.id ? {...data, id: a.id} : a
                          ));
                          toast({
                            title: "Address updated",
                            description: "Your address has been updated successfully."
                          });
                        }} 
                      />
                    </DialogContent>
                  </Dialog>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDelete(address.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </div>
                {!address.isDefault && (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleSetDefault(address.id)}
                  >
                    Set as Default
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}

          <Dialog>
            <DialogTrigger asChild>
              <Card className="flex flex-col items-center justify-center p-6 h-full border-dashed cursor-pointer hover:border-primary transition-colors">
                <PlusCircle className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="font-medium">Add New Address</p>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Address</DialogTitle>
              </DialogHeader>
              <AddressForm 
                onSubmit={(data) => {
                  const newAddress = {
                    ...data,
                    id: Date.now(),
                    isDefault: addresses.length === 0
                  };
                  setAddresses([...addresses, newAddress]);
                  toast({
                    title: "Address added",
                    description: "Your new address has been added successfully."
                  });
                }} 
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </AccountLayout>
  );
};

export default AddressesPage;
