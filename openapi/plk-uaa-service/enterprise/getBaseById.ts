import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/企业客户相关/getBaseByIdUsingPOST
export default function fetchMethod(data: IIdInformation1, extraOptions?: any) {
    return http<IJSONResultEnterpriseResponseObject>(
        {
            url: "/plk-uaa-service/enterprise/getBaseById",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// Id 信息_1
export interface IIdInformation1 {
    // id
    id: number;
}
// JSONResult«企业响应对象»
export interface IJSONResultEnterpriseResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IEnterpriseResponseObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 企业响应对象
export interface IEnterpriseResponseObject {
    // 数据状态
    dataStatus: number;
    // 创建人id
    createUserId: number;
    // 创建人名称
    createUsername: string;
    // 创建时间
    createTime: string;
    // 更新人id
    updateUserId: number;
    // 更新人名称
    updateUsername: string;
    // 更新时间
    updateTime: string;
    // id
    id: number;
    // 企业编号
    code: string;
    // 企业名
    name: string;
    // 是否启用批次关联
    isEnableBatchManagement: string;
}
