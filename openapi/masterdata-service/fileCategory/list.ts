import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/文件分类相关/listUsingGET_3
export default function fetchMethod() {
    return get<IJSONResultListFileCategoryListQueryResponseDTO['data']>({
      url: "/masterdata-service/fileCategory/list",
    });
}
// JSONResult«List«FileCategoryListQueryResponseDTO»»
export interface IJSONResultListFileCategoryListQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IFileCategoryListQueryResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// FileCategoryListQueryResponseDTO
export interface IFileCategoryListQueryResponseDTO {
    // ID
    id: number;
    // 分类名称
    name: string;
    // 用户权限列表
    userPermissionList: string[];
}
