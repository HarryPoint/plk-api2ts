import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/员工相关/batchGetByIdListUsingPOST
*/
export default function fetchMethod(options: { data: number[]params: { enterpriseId?: number } }, extraOptions?: any) {
    return http<IJSONResultListEmployeeVO>(
        {
            url: "/masterdata-service/employee/batchGetByIdList",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«员工VO»» */
export interface IJSONResultListEmployeeVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IEmployeeVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 员工VO */
export interface IEmployeeVO {
    /** id */
    id?: number;
    /** 员工工号 */
    code?: string;
    /** 员工姓名 */
    name?: string;
    /** 所属部门id */
    departmentId?: number;
    /** 所属账号id */
    userId?: number;
    /** 手机号码 */
    mobilePhone?: string;
    /** 班组id */
    classGroupId?: number;
    /** 入职日期 */
    entryTime?: string;
    /** 离职日期 */
    dimissionTime?: string;
    /** 出生日期 */
    birthday?: string;
    /** 性别 */
    gender?: EEmployeeVO_gender;
    /** 学历 */
    educational?: EEmployeeVO_educational;
    /** 籍贯 */
    nativePlace?: string;
    /** 任职职位id */
    positionId?: number;
    /** 任职开始日期 */
    positionDate?: string;
}

export enum EEmployeeVO_gender {
    /** 男 */
    MAN = "MAN",
    /** 女 */
    WOMAN = "WOMAN"
}

export enum EEmployeeVO_educational {
    /** 小学 */
    PRIMARY = "PRIMARY",
    /** 初中 */
    JUNIOR = "JUNIOR",
    /** 高中 */
    HIGH = "HIGH",
    /** 大专 */
    COLLEGE = "COLLEGE",
    /** 本科 */
    UNDERGRADUATE = "UNDERGRADUATE",
    /** 研究生 */
    POSTGRADUATE = "POSTGRADUATE",
    /** 中技 */
    INTERMEDIATE_TECHNICAL = "INTERMEDIATE_TECHNICAL",
    /** 硕士 */
    MASTER = "MASTER",
    /** 中专 */
    TECHNICAL_SECONDARY = "TECHNICAL_SECONDARY"
}
