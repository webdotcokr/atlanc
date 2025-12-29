import DesignerForm from '../../../components/designer-form';

export default function NewDesignerPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">디자이너 추가</h1>
        <p className="text-gray-600 mt-1">새로운 디자이너를 등록합니다.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8 max-w-3xl">
        <DesignerForm mode="create" />
      </div>
    </div>
  );
}
