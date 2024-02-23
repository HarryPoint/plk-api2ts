import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/运营角色相关/modifyUsingPOST_6
export default function fetchMethod(data: IOperationRoleAuthorizationInformationModificationRequest, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/manageRole/modify",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// 运营角色授权信息修改请求
export interface IOperationRoleAuthorizationInformationModificationRequest {
    // 编码
    code: string;
    // 名称
    name: string;
    // 描述
    description: string;
    // 权限码集
    permissionCodeList: string[];
    // id
    id: number;
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
