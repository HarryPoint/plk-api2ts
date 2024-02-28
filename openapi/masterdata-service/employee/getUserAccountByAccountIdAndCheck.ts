import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/员工相关/getUserAccountByAccountIdAndCheckUsingGET
*/
export default function fetchMethod(options: { params: { accountId?: string; enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultEmployeeAccountVO>(
        {
            url: "/masterdata-service/employee/getUserAccountByAccountIdAndCheck",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«员工账户VO» */
export interface IJSONResultEmployeeAccountVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IEmployeeAccountVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 员工账户VO */
export interface IEmployeeAccountVO {
    /** id */
    id?: string;
    /** 员工工号 */
    code?: string;
    /** 员工姓名 */
    name?: string;
    /** 所属部门id */
    departmentId?: string;
    /** 所属部门名称 */
    departmentName?: string;
    /** 所属账号id */
    userId?: string;
    /** 职位id */
    positionId?: string;
    /** 职位名称 */
    positionName?: string;
    /** 手机号码 */
    mobilePhone?: string;
    /** 过期时间 */
    expireTime?: number;
    /** 最后登录时间 */
    lastLoginTime?: number;
    /** 所属角色id */
    roleIds?: string[];
}
