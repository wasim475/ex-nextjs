import { Suspense } from 'react';

export default function Books(){
    return (
        <div>
          <Suspense fallback={ <h1>Loading....</h1> }>
          <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum aut quas ipsum, porro minima eaque obcaecati culpa error a, incidunt ratione harum ut, doloremque illum facilis provident? Officia corrupti possimus totam veritatis dolores ut eum officiis quas aliquam tempore a eveniet repellat laboriosam expedita voluptas, perferendis explicabo quia temporibus amet? In enim iusto quisquam eaque quae. Placeat praesentium fuga eligendi itaque iusto deserunt, libero tenetur id, minus, molestias commodi impedit cumque blanditiis laudantium ipsum maiores nemo nesciunt magnam dolorem omnis iste dolore porro distinctio. Nam, accusamus? Consectetur aspernatur omnis quos itaque ipsam hic facilis consequuntur voluptatibus sed, minus, nam saepe!
            </p>
          </Suspense>
        </div>
    );
}