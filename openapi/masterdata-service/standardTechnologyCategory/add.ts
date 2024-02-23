import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/标准工艺分类相关/addUsingPOST_8
export default function fetchMethod(data: INewRequestDTOForStandardProcessClassification) {
    return post<IJSONResultobject['data']>({
      url: "/masterdata-service/standardTechnologyCategory/add",
      data,
    });
}
// 标准工艺分类新增请求DTO
export interface INewRequestDTOForStandardProcessClassification {
    // 父级分类id
    parentCategoryId: number;
    // 分类名称
    name: string;
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
