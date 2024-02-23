import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/文件分类相关/getTreeByIdUsingGET
export default function fetchMethod(params: { id: number }, extraOptions?: any) {
    return http<IJSONResultFileClassificationDetailResponseDTO1>(
        {
            url: "/masterdata-service/fileCategory/getTreeById",
            method: "get",
            params,
        },
        extraOptions,
    );
}
// JSONResult«文件分类明细响应DTO»_1
export interface IJSONResultFileClassificationDetailResponseDTO1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IFileClassificationDetailsRespondToDTO1;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 文件分类明细响应DTO_1
export interface IFileClassificationDetailsRespondToDTO1 {
    // ID
    id: number;
    // 分类名称
    name: string;
    // 上级ID
    parentId: number;
    // 创建人ID
    createUserId: number;
    // 下级树列表
    childList: IFileClassificationDetailsRespondToDTO6[];
    // 用户权限列表
    userPermissionList: string[];
}
// 文件分类明细响应DTO_6
export interface IFileClassificationDetailsRespondToDTO6 {
    // ID
    id: number;
    // 分类名称
    name: string;
    // 上级ID
    parentId: number;
    // 创建人ID
    createUserId: number;
    // 下级树列表
    childList: IFileClassificationDetailsRespondToDTO6[];
    // 用户权限列表
    userPermissionList: string[];
}
