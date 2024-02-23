import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/员工相关/getVOByIdNotCheckUsingGET_1
export default function fetchMethod(params: { enterpriseId: number; id?: number }, extraOptions?: any) {
    return http<IJSONResultEmployeeVO>(
        {
            url: "/masterdata-service/employee/getVOByIdNotCheck",
            method: "get",
            params,
        },
        extraOptions,
    );
}
// JSONResult«员工VO»
export interface IJSONResultEmployeeVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IEmployeeVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 员工VO
export interface IEmployeeVO {
    // id
    id: number;
    // 员工工号
    code: string;
    // 员工姓名
    name: string;
    // 所属部门id
    departmentId: number;
    // 所属账号id
    userId: number;
    // 手机号码
    mobilePhone: string;
    // 班组id
    classGroupId: number;
    // 入职日期
    entryTime: string;
    // 离职日期
    dimissionTime: string;
    // 出生日期
    birthday: string;
    // 性别
    gender: string;
    // 学历
    educational: string;
    // 籍贯
    nativePlace: string;
    // 任职职位id
    positionId: number;
    // 任职开始日期
    positionDate: string;
}
