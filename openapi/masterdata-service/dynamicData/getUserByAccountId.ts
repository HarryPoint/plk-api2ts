import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/动态数据相关/getUserByAccountIdUsingGET
export default function fetchMethod(params: { accountId: number; enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultEmployeeAccountVO>(
        {
            url: "/masterdata-service/dynamicData/getUserByAccountId",
            method: "get",
            params,
        },
        extraOptions,
    );
}
// JSONResult«员工账户VO»
export interface IJSONResultEmployeeAccountVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IEmployeeAccountVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 员工账户VO
export interface IEmployeeAccountVO {
    // id
    id: number;
    // 员工工号
    code: string;
    // 员工姓名
    name: string;
    // 所属部门id
    departmentId: number;
    // 所属部门名称
    departmentName: string;
    // 所属账号id
    userId: number;
    // 职位id
    positionId: number;
    // 职位名称
    positionName: string;
    // 手机号码
    mobilePhone: string;
    // 过期时间
    expireTime: string;
    // 最后登录时间
    lastLoginTime: string;
    // 所属角色id
    roleIds: number[];
}
