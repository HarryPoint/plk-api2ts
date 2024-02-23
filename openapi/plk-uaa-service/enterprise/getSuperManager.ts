import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/企业客户相关/getSuperManagerUsingPOST
export default function fetchMethod(params: { id: number }, extraOptions?: any) {
    return http<IJSONResultTheSuperAdministratorRespondsToTheDTO>(
        {
            url: "/plk-uaa-service/enterprise/getSuperManager",
            method: "post",
            params,
        },
        extraOptions,
    );
}
// JSONResult«超级管理员用户响应 DTO»
export interface IJSONResultTheSuperAdministratorRespondsToTheDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITheSuperAdministratorRespondsToTheDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 超级管理员用户响应 DTO
export interface ITheSuperAdministratorRespondsToTheDTO {
    // 用户id
    userId: number;
    // 员工id
    employeeId: number;
    // 角色id
    roleId: number;
}
