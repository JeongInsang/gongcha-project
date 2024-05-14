import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import SearchClub from '@/components/SearchClub';
import MyClub from '@/components/MyClub';

function ClubPage() {
    const [haveMyClub, setHaveMyClub] = useState(true);
    return (
        <div className="px-2 mt-4">
            <div className="mt-16 mb-4 ml-4 text-xl font-ygJalnan">클럽</div>
            <Tabs defaultValue="searchClub" className="w-[330px] mx-auto">
                <TabsList className="flex justify-around">
                    <TabsTrigger value="searchClub">클럽 둘러보기</TabsTrigger>
                    <TabsTrigger value="myClub">나의 클럽 보기</TabsTrigger>
                </TabsList>
                <TabsContent value="searchClub">
                    <SearchClub />
                </TabsContent>
                <TabsContent value="myClub">
                    {haveMyClub ? <MyClub /> : <p className="mt-4 text-center">아직 나의 클럽이 없습니다</p>}
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default ClubPage;
