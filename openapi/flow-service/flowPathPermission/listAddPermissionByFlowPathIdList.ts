import { http } from '@/api/http';

// http://47.108.139.107:16500/doc.html#/default/应用权限相关/listAddPermissionByFlowPathIdListUsingPOST
export default function fetchMethod(data: number[]) {
    return http<IJSONResultListAddsPermissionEditing>({
        url: "/flow-service/flowPathPermission/listAddPermissionByFlowPathIdList",
        method: "post",
        data,
    });
}
// JSONResult«List«新增权限编辑»»
export interface IJSONResultListAddsPermissionEditing {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: INewPermissionEdit[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
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
