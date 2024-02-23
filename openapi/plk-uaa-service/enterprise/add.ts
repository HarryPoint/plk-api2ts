import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/企业客户相关/addUsingPOST_6
export default function fetchMethod(data: ITheEnterpriseAddedARequestObject) {
    return http<IJSONResultlong>({
        url: "/plk-uaa-service/enterprise/add",
        method: "post",
        data,
    });
}
// 企业新增请求对象
export interface ITheEnterpriseAddedARequestObject {
    // 企业名
    name: string;
    // 管理员手机号
    adminPhone: string;
    // 专家ids
    expertUserIdArray: number[];
    // 销售经理ids
    salesManagerUserIdArray: number[];
    // 交付经理用户ids
    deliveryManagerUserIdArray: number[];
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
