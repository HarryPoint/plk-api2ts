import { http } from '@/api/http';

// http://47.108.139.107:16500/doc.html#/default/应用权限相关/getByFlowPathIdUsingGET
export default function fetchMethod(params: { flowPathId: number }) {
    return http<IJSONResultQueryPermissionQueryResponse>({
        url: "/flow-service/flowPathPermission/getByFlowPathId",
        method: "get",
        params,
    });
}
// JSONResult«查询权限查询Response»
export interface IJSONResultQueryPermissionQueryResponse {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IQueryPermissionQueryResponse;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 查询权限查询Response
export interface IQueryPermissionQueryResponse {
    // 表单控制 - 编辑权限列表
    editPermissionList: IAddedPermissionEdit2[];
    // 表单控制 - 新增权限列表
    addPermissionList: INewPermissionEdit[];
    // 表单控制 - 查询权限列表
    queryPermissionList: IQueryPermissionEditing[];
    // 表单控制 - 复制权限列表
    copyPermissionList: IAddedPermissionEdit1[];
}
// 新增权限编辑_2
export interface IAddedPermissionEdit2 {
    // ID
    id: number;
    // 流程状态
    flowStatus: string;
    // 是否可编辑
    isEditable: string;
    // 是否禁用
    isDisabled: string;
}
// 新增权限编辑
export interface INewPermissionEdit {
    // ID
    id: number;
    // 流程字段ID
    flowPathFormFieldId: number;
    // 流程字段编码
    flowPathFormFieldCode: string;
    // 流程字段序列号
    flowPathFormFieldSerialNo: string;
    // 权限类型
    type: string;
}
// 查询权限编辑
export interface IQueryPermissionEditing {
    // ID
    id: number;
    // 流程字段ID
    flowPathFormFieldId: number;
    // 流程字段编码
    flowPathFormFieldCode: string;
    // 流程字段序列号
    flowPathFormFieldSerialNo: string;
    // 是否可见
    isVisible: string;
}
// 新增权限编辑_1
export interface IAddedPermissionEdit1 {
    // ID
    id: number;
    // 流程字段ID
    flowPathFormFieldId: number;
    // 流程字段编码
    flowPathFormFieldCode: string;
    // 流程字段序列号
    flowPathFormFieldSerialNo: string;
    // 是否可以复制
    isCanCopy: string;
}
