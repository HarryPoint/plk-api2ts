import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/标准工艺分类相关/resetCategorySortUsingPOST
export default function fetchMethod(data: IStandardProcessClassificationSortRequestDTO) {
    return http<IJSONResultobject>({
        url: "/masterdata-service/standardTechnologyCategory/resetCategorySort",
        method: "post",
        data,
    });
}
// 标准工艺分类排序请求DTO
export interface IStandardProcessClassificationSortRequestDTO {
    // 父级分类id, 当移动到第一级时,传递空;
    parentCategoryId: number;
    // 分类id
    id: number;
    // 移动后所处父级分类下的第几个位置
    sort: number;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
