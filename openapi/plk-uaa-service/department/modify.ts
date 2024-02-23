import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/部门相关/modifyUsingPOST_3
export default function fetchMethod(data: IDepartmentEditRequest, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/department/modify",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// 部门编辑请求
export interface IDepartmentEditRequest {
    // id
    id: number;
    // 编码
    code: string;
    // 名称
    name: string;
    // 父级id
    parentId: number;
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
