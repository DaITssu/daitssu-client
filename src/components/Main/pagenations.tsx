const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div>
      <div>
        <ul className="pagination">
          {new Array(totalPages).fill(0).map((item, index) => (
            <li
              key={index}
              className={`page-item ${currentPage === index ? 'active' : ''}`}
            >
              <a
                className="page-link"
                onClick={() => {
                  onPageChange(index);
                }}
              >
                {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
