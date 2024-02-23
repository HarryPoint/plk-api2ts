import { post } from '@/api/http';
 
// http://47.108.139.107:16500/doc.html#/default/应用权限相关/listQueryPermissionByFlowPathIdListUsingPOST
export default function fetchMethod(data: number[]) {
    return post<IJSONResultListEditTheQueryPermission['data']>({
      url: "/flow-service/flowPathPermission/listQueryPermissionByFlowPathIdList",
      data,
    });
}
// JSONResult«List«查询权限编辑»»
export interface IJSONResultListEditTheQueryPermission {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IQueryPermissionEditing[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
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
